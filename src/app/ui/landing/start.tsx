import { Button, ButtonGroup } from 'rsuite';
import Link from 'next/link'

export default function Start() {
    return (
        <Link href = "./home">
            <Button appearance="primary">Get Started</Button>
        </Link>
    );
}