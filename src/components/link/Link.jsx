import './link.css';

export const Link = ({ children, href, variant }) => {

    const className = `${variant === 'nav' ? 'link--nav': variant === 'ariane' ? 'link--ariane': ''}`;

    return (
        <a className={className} href={href}>
        {children}
        </a>
    );
}