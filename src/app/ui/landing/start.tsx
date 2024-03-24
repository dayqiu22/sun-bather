import { Button, ButtonGroup } from 'rsuite';
import Link from 'next/link'

export default function Start() {
    return (
        <Link href = "./home">
            <Button appearance="primary" style={{ backgroundColor: '#00aaf8', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>
                GET STARTED
            </Button>
        </Link>
    );
}