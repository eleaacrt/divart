export const Button = ({ children, variant, id, onClick }) => {
    
    const className = `${variant === 'delete' ? 'button--delete' : ''}`;

    return (
        <>

        <button 
            className={className} 
            id={id}
            variant={variant}
            onClick={onClick} 
        >
            {children}
        </button>

        </>

    );
};
