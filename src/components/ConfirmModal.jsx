import React from "react";
import "./ConfirmModal.css"
export default function ConfirmModal({ open, title = "Confirm", message = "Are you sure?", onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.4)'}}>
      <div className="modal-card" style={{background:'#fff',padding:'1rem 1.25rem',borderRadius:8,boxShadow:'0 6px 18px rgba(0,0,0,0.2)',maxWidth:420,width:'90%'}}>
        <h3 style={{marginTop:0}}>{title}</h3>
        <p>{message}</p>
        <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}>
          <button onClick={onCancel} style={{padding:'6px 10px'}}>No</button>
          <button onClick={onConfirm} style={{padding:'6px 10px'}} className="on-btn">Yes</button>
        </div>
      </div>
    </div>
  );
}
