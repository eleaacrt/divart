import { Link } from '../link/Link';
import { ReactComponent as LogoSvg} from '../../assets/logo.svg';
import './nav.css';

    
export const Nav = () => {
    return (
        <nav>

            <Link href="/">
                <LogoSvg/>
            </Link>

            <ul>
                <li>
                    <Link href="/" variant="nav">Découvrir</Link>
                </li>
                <li>
                    <Link href="/" variant="nav">Expérimenter</Link>
                </li>
                <li>
                    <Link href="/" variant="nav">Réserver</Link>
                </li>
            </ul>
        </nav>
    );
}