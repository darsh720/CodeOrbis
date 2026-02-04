'use client';
import { useState } from 'react';
import Image from 'next/image';

// ⚠️ IMPORTANT: Replace this with your actual OpenAI API key
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default function EmojiGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedEmoji, setGeneratedEmoji] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateEmoji = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt for your emoji');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedEmoji(null);

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: `Create a cute cartoon emoji style illustration of: ${prompt}. Make it colorful, simple, and suitable as an emoji or sticker. White background, centered, high quality.`,
          n: 1,
          size: '1024x1024',
          quality: 'standard',
          style: 'vivid'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate emoji');
      }

      const data = await response.json();
      setGeneratedEmoji(data.data[0].url);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      console.error('Error generating emoji:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadEmoji = () => {
    if (!generatedEmoji) return;
    
    const link = document.createElement('a');
    link.href = generatedEmoji;
    link.download = `emoji-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const examplePrompts = [
    'Happy dancing cat',
    'Excited robot with hearts',
    'Sleepy koala with coffee',
    'Party unicorn with confetti',
    'Cool sunglasses wearing dog',
    'Surprised panda eating bamboo',
    'Cute penguin with ice cream',
    'Laughing monkey with banana'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Cartoon Emoji Generator
          </h1>
          <p className="text-slate-500 text-lg">
            Create custom cartoon emojis with AI in seconds!
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-sky-100">
          {/* Prompt Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-600 mb-2">
              Describe Your Emoji
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., A happy dancing cat with rainbow colors"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 focus:border-sky-400 focus:outline-none transition-all duration-300 resize-none text-slate-700 bg-white"
            />
          </div>

          {/* Example Prompts */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-slate-600 mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(example)}
                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-sky-100 to-blue-100 text-sky-600 rounded-full hover:from-sky-200 hover:to-blue-200 transition-all duration-300 hover:scale-105"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateEmoji}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Magic...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Emoji
                </>
              )}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-500 text-sm animate-shake">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Generated Emoji Display */}
          {generatedEmoji && (
            <div className="mt-8 animate-scaleIn">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border-2 border-sky-200">
                <h3 className="text-lg font-bold text-slate-700 mb-4 text-center">
                  Your Custom Emoji
                </h3>
                <div className="relative w-full aspect-square max-w-md mx-auto mb-4 rounded-xl overflow-hidden shadow-lg bg-white">
                  <img 
                    src={generatedEmoji} 
                    alt="Generated emoji"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={downloadEmoji}
                    className="flex-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                  <button
                    onClick={() => {
                      setGeneratedEmoji(null);
                      setPrompt('');
                    }}
                    className="flex-1 bg-slate-200 text-slate-600 font-semibold py-3 rounded-xl hover:bg-slate-300 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Create New
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center text-sm text-slate-400">
          <p>
            Powered by CodeOrbis • Images are 1024x1024px
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 300px;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}