import React, { useState, useEffect } from "react";

export default function App() {
  const [today, setToday] = useState({
    shamsi: "",
    miladi: "",
    ghamari: ""
  });

  useEffect(() => {
    const now = new Date();
    const miladi = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const shamsi = "۱۰ شهریور ۱۴۰۴";
    const ghamari = "۲۷ صفر ۱۴۴۷";

    setToday({ shamsi, miladi, ghamari });
  }, []);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "20px", fontFamily: "Tahoma, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "orange" }}>LDNIO Mashhad</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>{today.shamsi}</p>
        <p>{today.miladi}</p>
        <p>{today.ghamari}</p>
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: "bold" }}>یادداشت روزانه:</p>
        <textarea style={{ width: "100%", height: "150px" }} placeholder="یادداشت خود را اینجا بنویسید..." />
      </div>
    </div>
  );
}
