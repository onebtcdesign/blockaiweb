"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 导入组件
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Technology from "@/components/Technology";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // 确保组件只在客户端渲染
  useEffect(() => {
    setMounted(true);
    
    // 添加背景网格动画效果
    const createGridAnimation = () => {
      const canvas = document.getElementById('grid-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const gridSize = 30;
      const nodeRadius = 1;
      const lineWidth = 0.3;
      
      // 绘制网格
      function drawGrid() {
        if (!ctx) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
        ctx.lineWidth = lineWidth;
        
        // 水平线
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        
        // 垂直线
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // 节点
        ctx.fillStyle = 'rgba(121, 40, 202, 0.6)';
        for (let x = 0; x < canvas.width; x += gridSize) {
          for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // 随机生成闪光点
        const time = Date.now() / 1000;
        for (let i = 0; i < 5; i++) {
          const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
          const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
          
          ctx.fillStyle = `rgba(255, 0, 128, ${0.3 + 0.7 * Math.sin(time + i)})`;
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // 发光效果
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(255, 0, 128, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, nodeRadius * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        requestAnimationFrame(drawGrid);
      }
      
      drawGrid();
      
      // 响应窗口大小变化
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
    
    createGridAnimation();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      {/* 背景网格特效 */}
      <canvas 
        id="grid-canvas" 
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          <Services />
          <CaseStudies />
          <Team />
          <Technology />
          <Faq />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
