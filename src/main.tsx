import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // TODO ルーターの設定
  // lintとフォーマッター
  // 残り二画面のv0での生成
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
