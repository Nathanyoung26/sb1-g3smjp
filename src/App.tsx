import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomeIcon, MagnifyingGlassIcon, AcademicCapIcon, UserGroupIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const HomePage = () => (
  <div className="pb-16">
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Continue Listening</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {['Twinkle Twinkle', 'ABC Song', 'Old MacDonald'].map((song) => (
          <div key={song} className="flex-shrink-0 w-40">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="bg-purple-200 w-32 h-32 rounded-lg mb-2"></div>
              <p className="font-semibold">{song}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Story of the Day</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold">The Friendly Dragon</h3>
        <p className="text-gray-600">Join Alex on a magical adventure with a dragon who loves to sing!</p>
      </div>
    </section>

    <section>
      <h2 className="text-xl font-bold mb-4">Learning Songs</h2>
      <div className="grid grid-cols-2 gap-4">
        {['Colors & Shapes', 'Animal Sounds', 'Numbers Fun', 'Body Parts'].map((topic) => (
          <div key={topic} className="bg-white rounded-lg shadow-md p-4">
            <div className="bg-purple-200 w-full h-24 rounded-lg mb-2"></div>
            <p className="font-semibold">{topic}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const SearchPage = () => (
  <div className="p-4">
    <div className="mb-6">
      <input
        type="search"
        placeholder="Search songs, stories, or activities..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <div className="mb-6">
      <h3 className="font-bold mb-2">Popular Categories</h3>
      <div className="flex flex-wrap gap-2">
        {['Bedtime', 'Educational', 'Languages', 'Lullabies'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-purple-100 rounded-full text-purple-700 hover:bg-purple-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const LearnPage = () => (
  <div className="p-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="font-bold">Language Learning</h3>
        <p className="text-sm">Learn new words in multiple languages</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="font-bold">Numbers & Counting</h3>
        <p className="text-sm">Fun with numbers and basic math</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-bold">Alphabet Songs</h3>
        <p className="text-sm">Learn letters through music</p>
      </div>
      <div className="bg-red-100 p-4 rounded-lg">
        <h3 className="font-bold">Animals & Sounds</h3>
        <p className="text-sm">Discover animal sounds and facts</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-purple-50">
        <header className="bg-purple-600 text-white p-4">
          <h1 className="text-2xl font-bold">BabyTunes</h1>
        </header>
        
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/community" element={<div>Community Page</div>} />
            <Route path="/library" element={<div>Library Page</div>} />
          </Routes>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="flex justify-around p-4">
            <Link to="/" className="flex flex-col items-center text-purple-600">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/search" className="flex flex-col items-center text-purple-600">
              <MagnifyingGlassIcon className="h-6 w-6" />
              <span className="text-xs">Search</span>
            </Link>
            <Link to="/learn" className="flex flex-col items-center text-purple-600">
              <AcademicCapIcon className="h-6 w-6" />
              <span className="text-xs">Learn</span>
            </Link>
            <Link to="/community" className="flex flex-col items-center text-purple-600">
              <UserGroupIcon className="h-6 w-6" />
              <span className="text-xs">Community</span>
            </Link>
            <Link to="/library" className="flex flex-col items-center text-purple-600">
              <BookmarkIcon className="h-6 w-6" />
              <span className="text-xs">Library</span>
            </Link>
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;