import styles from '../../styles/Edgar.module.css';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { edgar: data }
    }
}

const Ninjas = ({ edgar }) => {
    return (
        <>
            <Head>
                <title>Edgar List | All Edgar</title>
                <meta name="keywords" content="edgar" />
            </Head>
            <div>
                <h1>All Edgar</h1>
                {
                    edgar.map(user => (
                        <Link href={`/edgar/${user.id}`} key={user.id}>
                            <a className={ styles.single }>
                                <h3>{ user.name }</h3>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}
 
export default Ninjas;