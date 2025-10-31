<style>
  .snowflake {
    position: absolute;
    top: -30px;
    user-select: none;
    pointer-events: none;
    animation: fall linear infinite;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.6));
  }

  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }

  .ground {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.2), transparent);
    z-index: 5;
  }
</style>

`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path
    d="M10 2 L10 18 M10 2 L8 4 M10 2 L12 4 M10 18 L8 16 M10 18 L12 16 M2 10 L18 10 M2 10 L4 8 M2 10 L4 12 M18 10 L16 8 M18 10 L16 12 M5 5 L15 15 M5 5 L7 7 M5 5 L3 7 M15 15 L13 13 M15 15 L17 13 M15 5 L5 15 M15 5 L13 7 M15 5 L17 7 M5 15 L7 13 M5 15 L3 13"
    stroke="white"
    stroke-width="1"
    stroke-linecap="round"
  /></svg
>`, // Salju bentuk 2 `<svg
  width="15"
  height="15"
  viewBox="0 0 15 15"
  fill="none"
>
  <circle cx="7.5" cy="7.5" r="1.5" fill="white" />
  <path
    d="M7.5 2 L7.5 13 M7.5 2 L6 3.5 M7.5 2 L9 3.5 M7.5 13 L6 11.5 M7.5 13 L9 11.5 M2 7.5 L13 7.5 M2 7.5 L3.5 6 M2 7.5 L3.5 9 M13 7.5 L11.5 6 M13 7.5 L11.5 9"
    stroke="white"
    stroke-width="1"
    stroke-linecap="round"
  /></svg
>`, // Salju bentuk 3 `<svg
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="none"
>
  <path
    d="M9 3 L9 15 M9 3 L7.5 4.5 M9 3 L10.5 4.5 M9 15 L7.5 13.5 M9 15 L10.5 13.5 M3 9 L15 9 M3 9 L4.5 7.5 M3 9 L4.5 10.5 M15 9 L13.5 7.5 M15 9 L13.5 10.5 M5 5 L13 13 M5 5 L6.5 6.5 M5 5 L3.5 6.5 M13 13 L11.5 11.5 M13 13 L14.5 11.5 M13 5 L5 13 M13 5 L11.5 6.5 M13 5 L14.5 6.5 M5 13 L6.5 11.5 M5 13 L3.5 11.5"
    stroke="white"
    stroke-width="0.8"
    stroke-linecap="round"
  />
  <circle
    cx="9"
    cy="9"
    r="2"
    fill="none"
    stroke="white"
    stroke-width="0.8"
  /></svg
>`, // Salju bentuk 4 (sangat sederhana) `<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    d="M6 1 L6 11 M6 1 L5 2 M6 1 L7 2 M6 11 L5 10 M6 11 L7 10 M1 6 L11 6 M1 6 L2 5 M1 6 L2 7 M11 6 L10 5 M11 6 L10 7 M3 3 L9 9 M3 3 L4 4 M3 3 L2 4 M9 9 L8 8 M9 9 L10 8 M9 3 L3 9 M9 3 L8 4 M9 3 L10 4 M3 9 L4 8 M3 9 L2 8"
    stroke="white"
    stroke-width="0.7"
    stroke-linecap="round"
  /></svg
>` ]; let snowInterval; let snowflakeCount = 1; const intensity = 40; //
milliseconds between snowflakes function createSnowflake() { const snowflake =
document.createElement('div'); snowflake.className = 'snowflake'; // Pilih SVG
secara random const randomSVG = snowflakeSVGs[Math.floor(Math.random() *
snowflakeSVGs.length)]; snowflake.innerHTML = randomSVG; // Random properties
(ukuran lebih kecil) const size = Math.random() * 10 + 8; // 8-18px (sebelumnya
15-35px) const startPosition = Math.random() * window.innerWidth; const duration
= Math.random() * 4 + 4; // 4-8 seconds (sedikit lebih cepat) const opacity =
Math.random() * 0.5 + 0.3; // 0.3-0.8 (sedikit lebih transparan) const
horizontalMovement = (Math.random() - 0.5) * 80; // -40 to 40px (gerakan lebih
kecil) // Apply styles snowflake.style.left = startPosition + 'px';
snowflake.style.width = size + 'px'; snowflake.style.height = size + 'px';
snowflake.style.opacity = opacity; snowflake.style.animationDuration = duration
+ 's'; // Add horizontal movement
snowflake.style.setProperty('--horizontal-movement', horizontalMovement + 'px');
// Add custom animation for horizontal drift const keyframes = ` @keyframes
drift-${snowflakeCount} { 0% { transform: translateX(0px); } 50% { transform:
translateX(${horizontalMovement}px); } 100% { transform:
translateX(${horizontalMovement * 2}px); } } `; const style =
document.createElement('style'); style.textContent = keyframes;
document.head.appendChild(style); snowflake.style.animation += `,
drift-${snowflakeCount} ${duration}s ease-in-out infinite`;
document.body.appendChild(snowflake); snowflakeCount++; // Remove snowflake
after animation setTimeout(() => { snowflake.remove(); snowflakeCount--;
style.remove(); }, duration * 1000); } function startSnowing() { if
(snowInterval) clearInterval(snowInterval); snowInterval =
setInterval(createSnowflake, intensity); } // Start snowing when page loads
window.addEventListener('load', () => { startSnowing(); // Create initial burst
of snow (jumlah lebih sedikit karena ukuran kecil) for (let i = 0; i < 15; i++)
{ setTimeout(createSnowflake, i * 80); } }); // Pause snow when tab is not
visible document.addEventListener('visibilitychange', () => { if
(document.hidden) { clearInterval(snowInterval); } else { startSnowing(); } });
