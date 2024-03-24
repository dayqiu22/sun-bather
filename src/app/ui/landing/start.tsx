import { Button, ButtonGroup } from 'rsuite';
import Link from 'next/link'

export default function Start() {
    return (
        <Link href = "./home">
            <Button className='landing-button shadowed'>Get Started</Button>
        </Link>
    );
}