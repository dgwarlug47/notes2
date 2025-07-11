import React, { useState, useEffect } from "react";

import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwrvloj");
  if (state.succeeded) {
      return (
        <div style={{
          backgroundColor: '#000000',
          border: '1px solid #0ea5e9',
          padding: '20px',
          color: '#0c4a6e'
        }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '500' }}>
            Thanks for commenting! 🎉
          </p>
        </div>
      );
  }
  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#000000',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      border: '#000000',
    }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="email" style={{
            fontSize: '28px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Your name
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            style={{
              padding: '12px 16px',
              border: '#000000',
              fontSize: '16px',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#000000';
              e.target.style.boxShadow = 'none';
            }}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{
            fontSize: '28px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '4px'
          }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            style={{
              border: '#000000',
              fontSize: '16px',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#000000';
              e.target.style.boxShadow = 'none';
            }}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            style={{ color: '#ef4444', fontSize: '14px', marginTop: '4px' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          style={{
            backgroundColor: state.submitting ? '#9ca3af' : '#3b82f6',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: state.submitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease, transform 0.1s ease',
            marginTop: '8px'
          }}
          onMouseEnter={(e) => {
            if (!state.submitting) {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-1px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!state.submitting) {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

function CommentsForm() {
  return (
    <ContactForm />
  );
}

export default CommentsForm;
