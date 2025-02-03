export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
  