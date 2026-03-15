import profilePhoto from '@/assets/me.png';
import { Mail, Phone, Globe, MapPin, Download } from 'lucide-react';

/**
 * Professional ATS-Optimized Resume
 * 
 * CUSTOMIZATION GUIDE:
 * 1. Update profile photo: Change the import path above
 * 2. Personal info: Update contact details in the header section
 * 3. Experience: Modify the EXPERIENCE section
 * 4. Education: Update the EDUCATION section
 * 5. Skills: Edit the TECHNICAL SKILLS section
 * 6. Projects: Customize the PROJECTS section
 * 
 * TIPS:
 * - Keep content concise for single-page fit
 * - Use action verbs in bullet points
 * - Include relevant keywords for ATS
 * - Test PDF output after changes (Click "Download as PDF")
 * 
 * For detailed help, see README.md and QUICK_START.md
 */

export default function App() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-2 sm:p-6 lg:p-8">
      {/* Download Button - Fixed position */}
      <div className="fixed top-4 right-4 print:hidden z-10">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Download as PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </div>

      <div className="max-w-[8.5in] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Resume Container - Compact for single page */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
          
          {/* Header Section with Photo - Compact */}
          <header className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-3 sm:pb-4 border-b-4 border-blue-600">
            {/* Professional Photo */}
            <div className="flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Prathmesh Dhote" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg shadow-md border-4 border-blue-100"
              />
            </div>
            
            {/* Header Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-1 text-slate-900 tracking-tight">PRATHMESH DHOTE</h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-600 mb-2 sm:mb-3">Software Developer</p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">prathmeshdhote@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <span>9529169879</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700 sm:col-span-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <a href="https://portfolio-one-alpha-88uqjqq5gl.vercel.app/" className="text-blue-600 hover:underline truncate">
                    portfolio-one-alpha-88uqjqq5gl.vercel.app
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-700 sm:col-span-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <span>Aurangabad, Maharashtra</span>
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary - Compact */}
          <section>
            <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">PROFESSIONAL SUMMARY</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
              Software Developer with professional experience in designing and developing scalable full-stack web applications using Next.js, ASP.NET Core (C#), and SQL Server. Currently working at Sthapatya Consultant Pvt. Ltd., building e-governance software systems such as Property Tax and Water Billing platforms for municipal corporations.
            </p>
          </section>

          {/* Two Column Layout for Desktop, Stacked for Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4">
              
              {/* Education */}
              <section>
                <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">EDUCATION</h2>
                <div className="mt-2">
                  <h3 className="text-xs sm:text-sm text-slate-900">B.Tech in Information Technology</h3>
                  <p className="text-xs text-slate-700">Government College of Engineering, Aurangabad</p>
                  <p className="text-xs text-blue-600">2025 • Aurangabad, Maharashtra</p>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">TECHNICAL SKILLS</h2>
                <div className="space-y-1 text-xs sm:text-sm mt-2">
                  <div>
                    <span className="text-slate-900">Programming:</span>
                    <span className="text-slate-700"> C#, Java, JavaScript</span>
                  </div>
                  <div>
                    <span className="text-slate-900">Frontend:</span>
                    <span className="text-slate-700"> Next.js, React.js, HTML5, CSS3, Tailwind CSS, Bootstrap</span>
                  </div>
                  <div>
                    <span className="text-slate-900">Backend:</span>
                    <span className="text-slate-700"> ASP.NET Core, REST API, Node.js, Express.js</span>
                  </div>
                  <div>
                    <span className="text-slate-900">Database:</span>
                    <span className="text-slate-700"> SQL Server, MySQL, MongoDB</span>
                  </div>
                  <div>
                    <span className="text-slate-900">Tools:</span>
                    <span className="text-slate-700"> Git, GitHub, Postman, VS Code</span>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">LANGUAGES</h2>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">English, Hindi, Marathi,Telugu</p>
              </section>

              {/* Interests */}
              <section>
                <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">INTERESTS</h2>
                <p className="text-xs sm:text-sm text-slate-700 mt-2">Harmonium, Instrumental Music, Theatre, Writing, Volleyball, Learning New Technologies</p>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-3 sm:space-y-4">
              
              {/* Professional Experience */}
              <section>
                <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">EXPERIENCE</h2>
                <div className="mt-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <div>
                      <h3 className="text-xs sm:text-sm text-slate-900">Software Developer</h3>
                      <p className="text-xs text-blue-600">Sthapatya Consultant Pvt. Ltd.</p>
                    </div>
                    <div className="text-xs text-slate-700">
                      <p className="text-blue-600">Aug 2025 - Present</p>
                      <p>Amravati, Maharashtra</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
                    <li>Developed full-stack e-governance applications for municipal corporations</li>
                    <li>Built scalable frontends using Next.js with ASP.NET Core backends</li>
                    <li>Designed RESTful APIs for municipal management systems</li>
                    <li>Optimized SQL Server database schemas and queries</li>
                    <li>Collaborated with teams to deploy government solutions</li>
                  </ul>
                </div>
              </section>

              {/* Projects */}
              <section>
  <h2 className="text-base sm:text-lg lg:text-xl mb-2 text-slate-900 pb-1 border-b-2 border-blue-600 inline-block">
    PROJECTS
  </h2>

  <div className="space-y-2 mt-2">

    <div>
      <h3 className="text-xs sm:text-sm text-slate-900">
        AI Study Planner 
        <span className="text-[10px] sm:text-xs text-slate-700 ml-1">
          (React, AI Services, FastAPI, ASP.NET Core, Next.js, EF Core)
        </span>
      </h3>

      <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
        <li>Built intelligent study planning system with React</li>
        <li>Implemented backend APIs for exam data management</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xs sm:text-sm text-slate-900">
        Inventory Management System
        <span className="text-[10px] sm:text-xs text-slate-700 ml-1">
          (React, ASP.NET Core, SQL Server, REST APIs, Clean Architecture)
        </span>
      </h3>

      <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
        <li>Developed full-stack inventory tracking system</li>
        <li>Optimized SQL queries for efficient operations</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xs sm:text-sm text-slate-900">
        Hotel Billing Management
        <span className="text-[10px] sm:text-xs text-slate-700 ml-1">
          (React, Bootstrap, MySQL)
        </span>
      </h3>

      <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
        <li>Built dynamic billing system with Bootstrap UI</li>
        <li>Implemented efficient billing calculations</li>
      </ul>
    </div>

  </div>
</section>
            </div>
          </div>

        </div>
      </div>
      
      {/* Instructions */}
      <div className="max-w-[8.5in] mx-auto mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg print:hidden shadow-md">
        <h3 className="text-base sm:text-lg mb-2 sm:mb-3 text-blue-900">📄 Resume Instructions:</h3>
        <ul className="text-xs sm:text-sm text-blue-800 space-y-1 sm:space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>Click <strong>"Download as PDF"</strong> to save your resume</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>Select <strong>"Save as PDF"</strong> in print dialog</span>
          </li>
          {/* <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span><strong>100% ATS-optimized</strong> with clean formatting</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
}