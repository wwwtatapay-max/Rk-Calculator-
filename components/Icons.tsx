
import React from 'react';

type IconProps = {
    className?: string;
};

export const ReceiptIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.907 6.18l-1.299 4.745 4.833-1.276zM9.356 8.012c-.14-.27-.28-.28-.504-.282s-.423-.041-1.032.485c-.655.568-1.124 1.34-1.124 2.654s.568 2.378 1.123 2.654c.54.27 1.123.423 1.564.423.28 0 .576-.07.787-.21.28-.184.424-.41.565-.68.14-.27.28-.54.424-.81.14-.282.28-.504.424-.504s.28.07.424.21c.14.14.84.98 1.124 1.32.28.34.492.422.703.422s.423.21.565.35c.14.14.423.492.703.632.28.14.423.14.565.14s.423-.07.565-.21c.14-.14.423-.423.565-.68.14-.282.21-.424.21-.565s-.07-.424-.21-.565c-.14-.14-.28-.21-.424-.282-.14-.07-.28-.14-.424-.21s-.28-.14-.424-.21c-.14-.07-.28-.14-.28-.21s.07-.14.21-.282c.14-.14.28-.28.423-.424s.28-.28.35-.424c.07-.14.14-.28.14-.424s-.07-.28-.14-.424c-.07-.14-.14-.28-.21-.424-.07-.14-.14-.21-.21-.282-.07-.07-.14-.14-.21-.14s-.14-.07-.21-.07h-.14c-.07 0-.14.07-.21.07s-.14.07-.21.14c-.07.07-.14.14-.21.21s-.14.14-.14.21-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14c-.07 0-.14.07-.21.14-.07.07-.14.14-.21.21-.07.07-.14.14-.14.21s-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14c-.07 0-.14.07-.21.14-.07.07-.14.14-.21.21-.07.07-.14.14-.14.21s-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14c-.07 0-.14.07-.21.14-.07.07-.14.14-.21.21s-.14.14-.14.21-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14c-.07 0-.14.07-.21.14-.07.07-.14.14-.21.21s-.14.14-.14.21-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14c-.07 0-.14.07-.21.14-.07.07-.14.14-.21.21s-.14.14-.14.21-.07.14-.07.21c0 .07.07.14.07.21s.14.14.21.21.14.14.21.21.14.07.21.07h.14c.07 0 .14-.07.21-.14.07-.07.14-.14.14-.21s.07-.14.07-.21-.07-.14-.07-.21-.07-.14-.14-.14h-.14z"/>
    </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
);

export const ClearIcon: React.FC<IconProps> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);
