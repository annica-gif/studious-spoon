:root {
  --bg: #f5f5f5;
  --surface: #ffffff;
  --primary: #5b8cff;
  --text: #333333;
  --muted: #666666;
  --shadow: 0 4px 12px rgba(0,0,0,.1);
}
 
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
}
 
.site-header {
  text-align: center;
  padding: 32px 20px;
  background: var(--primary);
  color: white;
}
 
.site-header h1 {
  margin: 0 0 8px;
  font-size: 2.2rem;
}
 
.tagline {
  margin: 0;
  font-size: 1.1rem;
  color: #e8f0ff;
}
 
.controls {
  display: flex;
  gap: 10px;
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}
 
.controls input, .controls select {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
 
main {
  max-width: 1100px;
  margin: 20px auto;
  padding: 0 20px;
}
 
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
 
.card {
  background: var(--surface);
  border-radius: 16px;
  box-shadow: var(--shadow);
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
 
.title {
  margin: 0;
  font-size: 18px;
}
 
.area {
  font-size: 14px;
  color: var(--muted);
}
 
.desc {
  font-size: 14px;
  margin: 8px 0;
  color: var(--muted);
}
 
.rating {
  font-weight: bold;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 
.vote-btn {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.85rem;
}
 
.vote-btn:hover {
  background: #4775d1;
}
 
.add-form {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: var(--surface);
  border-radius: 16px;
  box-shadow: var(--shadow);
}
 
.add-form h2 {
  margin-top: 0;
}
 
.add-form label {
  display: block;
  margin: 10px 0;
}
 
.add-form input, .add-form textarea, .add-form select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
 
.btn.primary {
  background: var(--primary);
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}
 
.btn.primary:hover {
  background: #4775d1;
}
 
.site-footer {
  text-align: center;
  margin: 40px 0;
  color: var(--muted);
}