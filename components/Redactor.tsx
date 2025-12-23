import React, { useState, useRef } from 'react';
import { Upload, FileText, Download, ShieldAlert, X, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { PdfViewer } from './PdfViewer';
import { PageRedactions } from '../types';
import { saveRedactedPdf, downloadPdf } from '../services/pdfService';

export function Redactor() {
  const [files, setFiles] = useState<File[]>([]);
  const [currentFileIndex, setCurrentFileIndex] = useState<number>(0);
  const [redactions, setRedactions] = useState<PageRedactions>({});
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentFile = files[currentFileIndex] || null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFiles(Array.from(fileList));
      setCurrentFileIndex(0);
      setRedactions({});
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    if (fileList && fileList.length > 0) {
      const pdfFiles = Array.from(fileList).filter((f: File) => f.type === 'application/pdf');
      if (pdfFiles.length > 0) {
        setFiles(pdfFiles);
        setCurrentFileIndex(0);
        setRedactions({});
      }
    }
  };

  const handleDownload = async () => {
    if (!currentFile) return;
    
    try {
      setIsSaving(true);
      const pdfBytes = await saveRedactedPdf(currentFile, redactions);
      const fileName = currentFile.name.replace('.pdf', '_redacted.pdf');
      downloadPdf(pdfBytes, fileName);
      
      // Move to next file if available
      if (currentFileIndex < files.length - 1) {
        setCurrentFileIndex(prev => prev + 1);
        setRedactions({});
      }
    } catch (error) {
      console.error('Error saving PDF:', error);
      alert('Có lỗi xảy ra khi lưu file. Vui lòng thử lại.');
    } finally {
      setIsSaving(false);
    }
  };

  const goToFile = (index: number) => {
    setCurrentFileIndex(index);
    setRedactions({});
  };

  const resetApp = () => {
    setFiles([]);
    setCurrentFileIndex(0);
    setRedactions({});
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Count total redactions for UI feedback
  const totalRedactions = Object.values(redactions).reduce((acc: number, curr) => acc + (curr as any[]).length, 0);

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 flex-shrink-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">PDF Reducktor </h1>
              {currentFile && (
                <p className="text-xs text-slate-500 truncate max-w-md">{currentFile.name}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {currentFile && (
              <>
                 <div className="hidden md:flex items-center gap-2 mr-4 text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    {totalRedactions} vùng đã che
                 </div>
                 {files.length > 1 && (
                   <div className="text-sm text-slate-600 bg-blue-50 px-3 py-1 rounded-full font-medium">
                     File {currentFileIndex + 1}/{files.length}
                   </div>
                 )}
                 <Button 
                    variant="secondary" 
                    onClick={resetApp}
                    icon={<X className="w-4 h-4" />}
                 >
                   Hủy
                 </Button>
                 <Button 
                    variant="primary" 
                    onClick={handleDownload}
                    disabled={isSaving}
                    icon={isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                 >
                   {isSaving ? 'Đang xử lý...' : 'Lưu & Tải xuống'}
                 </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {!currentFile ? (
          // Upload State
          <div 
            className="flex-1 flex items-center justify-center p-6"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border-2 border-dashed border-slate-300 p-10 text-center hover:border-blue-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Tải file PDF lên</h2>
              <p className="text-slate-500 mb-8">Kéo thả file vào đây hoặc click để chọn file từ máy tính của bạn. Có thể chọn nhiều file cùng lúc.</p>
              
              <input
                type="file"
                accept=".pdf"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 text-lg"
              >
                Chọn một hoặc nhiều File PDF
              </Button>
              <p className="mt-4 text-xs text-slate-400">
                Mọi xử lý được thực hiện trực tiếp trên trình duyệt của bạn. File không được gửi tới máy chủ nào.
              </p>
            </div>
          </div>
        ) : (
          // Editor State
          <div className="flex-1 flex flex-col overflow-hidden">
            {files.length > 1 && (
              <div className="bg-white border-b border-slate-200 px-4 py-3 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                  {files.map((file, index) => (
                    <button
                      key={index}
                      onClick={() => goToFile(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        index === currentFileIndex
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      {file.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <PdfViewer 
              file={currentFile} 
              redactions={redactions} 
              setRedactions={setRedactions} 
            />
          </div>
        )}
      </main>
    </div>
  );
}
