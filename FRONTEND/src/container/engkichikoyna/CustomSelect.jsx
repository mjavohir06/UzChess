import { useState, useRef, useEffect } from "react";
import "./Styles.css";
import { IconKorish } from "../../importers/Icon";



export default function CustomSelect({
  options = [{label:"Barchasi",value:"alll"}],
  value,
  onChange,
  width = 200,
  height = 44,
  bg = "#1C2024",
  color = "#fff",
  radius = 10,
  style={width:"100%",height:"54px",background:"#1C2024"}
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div
      ref={ref}
      className="cs-wrapper"
      style={{ width ,}}
    >
      <div
        className="cs-control"
        style={{ height, background: bg, color, borderRadius: radius }}
        onClick={() => setOpen(p => !p)}
      >
        <span>{selected ? selected.label : "Barchasi"}</span>
        <span className={`arrow ${open ? "up" : ""}`}>⌄</span>
        {open ? <IconKorish style={{color:"#fff", transfrom:"rotate(180deg)"}}/>:<IconKorish/>}
      </div>

      {open && (
        <div
          className="cs-menu"
          style={{ background: bg, borderRadius: radius }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              className="cs-option"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
