import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import SignIn from './components/sign-in'
import config from '@/payload.config'
import './styles.css'
import { auth } from "@/auth"

export default async function HomePage() {
    const headers = await getHeaders()
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const session = await auth()

    if (!session) {
        return (
            <div>
                <SignIn />
                <p>Log in with github to see list of products</p>
            </div>
        )
    }
    const products = await payload.find({
        collection: 'Products',
        limit: 100,
    })

    return (
        <div>
            <h1>List of Products</h1>
            <div className="products">
                <h2>Produkty:</h2>
                {products.docs.map((product) => (
                    <div key={product.id}>
                        <h3>{product.productName}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
