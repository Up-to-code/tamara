import Link from 'next/link';

// Safety net: anything not cloned (e.g. tamara's own dead /ar-sa/about link,
// or locales outside ar-sa/en-sa) lands here instead of Next's default 404.
export default function NotFound() {
  return (
    <div
      dir="rtl"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: 24,
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 800 }}>٤٠٤</div>
      <h1 style={{ fontSize: 24, margin: 0 }}>الصفحة غير موجودة</h1>
      <p style={{ opacity: 0.7, margin: 0 }}>عذرًا، الصفحة اللي بتدور عليها مش موجودة.</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/ar-sa">تمارا السعودية</Link>
        <Link href="/en-sa">Tamara Saudi (EN)</Link>
      </div>
    </div>
  );
}
