// app/page.tsx

export default function HomePage() {
  return (
    <>
      <div className="header">
        <div style={{ fontSize: 22 }}>Welcome</div>
      </div>

      <div className="content">
        <div>Use this tool</div>

        <form>
          <input type="text" placeholder="Amount" />
          <input type="text" placeholder="Increase" />
          <button>Go</button>
        </form>
      </div>

      <div>2025</div>

      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            type: 'tool',
            name: 'bad',
          }),
        }}
      />
    </>
  );
}
