import { useState } from 'react'
import './index.css'

export default function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Set Organizer Cucina Oliva',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Diffusore Aria in Ceramica',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1581092163562-40038f5e49df?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Cestino Tessuto Naturale',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1595521624236-e3db9d33f4d1?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Specchio da Parete Rotondo',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1611026528215-0490ae4e7e2a?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Vaso in Terracotta',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1589939705066-5470d87c840c?w=400&h=400&fit=crop',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Tappeto Lana Naturale',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1595521624236-e3db9d33f4d1?w=400&h=400&fit=crop',
      rating: 4.8
    }
  ]

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            📦 Paga alla consegna | 🚚 Spedizione 24-48h | 🔒 Acquisto sicuro
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                🛡️ CompraSicura
              </div>

              <nav className="nav">
                <a href="#" className="nav-link">Tutti</a>
                <a href="#" className="nav-link">Casa e Cucina</a>
                <a href="#" className="nav-link">Organizzazione</a>
                <a href="#" className="nav-link">Bellezza</a>
                <a href="#" className="nav-link">Benessere</a>
                <a href="#" className="nav-link">Animali</a>
                <a href="#" className="nav-link">Accessori</a>
                <a href="#" className="nav-link">Offerte</a>
              </nav>

              <div className="header-actions">
                <input type="text" className="search-input" placeholder="Cerca prodotti..." />
                <button className="icon-btn">👤</button>
                <button className="icon-btn" onClick={() => setShowCart(!showCart)} style={{position: 'relative', background: 'none', border: 'none', padding: 0}}>
                  🛒
                  {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CART DRAWER */}
      {showCart && (
        <div style={{
          position: 'fixed',
          right: 0,
          top: 120,
          width: 320,
          background: 'white',
          border: '1px solid #e0e0e0',
          padding: 20,
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 99,
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto'
        }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
            <h3>Carrello ({cart.length})</h3>
            <button onClick={() => setShowCart(false)} style={{background: 'none', border: 'none', fontSize: 20, cursor: 'pointer'}}>✕</button>
          </div>
          
          {cart.length === 0 ? (
            <p style={{fontSize: 12, opacity: 0.7}}>Carrello vuoto</p>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div key={idx} style={{marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div>
                    <p style={{fontSize: 12, fontWeight: 600, marginBottom: 4}}>{item.name}</p>
                    <p style={{fontSize: 12, color: 'var(--oro-caldo)', fontWeight: 700}}>€{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(idx)} style={{background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: 16}}>✕</button>
                </div>
              ))}
              <div style={{paddingTop: 12, borderTop: '2px solid #f0f0f0', marginTop: 12}}>
                <p style={{fontSize: 14, fontWeight: 700, marginBottom: 12}}>Totale: €{cartTotal}</p>
                <button className="btn-primary" style={{width: '100%', marginBottom: 8}}>Procedi al Checkout</button>
                <button onClick={() => setShowCart(false)} style={{width: '100%', padding: '10px', background: '#f0f0f0', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12, fontWeight: 600}}>Continua Shopping</button>
              </div>
            </>
          )}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="hero section">
        <div className="container">
          <div className="hero-container">
            <div className="hero-left">
              <div className="badge">
                ✓ Oltre 25.000 clienti soddisfatti
              </div>
              <h1>Prodotti selezionati per semplificare la tua vita.</h1>
              <p>Qualità, praticità e fiducia. Direttamente a casa tua.</p>
              <button className="btn-secondary" style={{marginBottom: 30, cursor: 'pointer'}}>Scopri i Prodotti</button>

              <div style={{background: 'rgba(255, 255, 255, 0.1)', padding: 20, borderRadius: 6}}>
                <div style={{marginBottom: 12}}>
                  <div style={{fontSize: 28, fontWeight: 700, color: 'var(--oro-caldo)'}}>★★★★★ 4,8/5</div>
                </div>
                <p style={{fontSize: 12}}>Oltre 25.000 clienti soddisfatti</p>
                <p style={{fontSize: 11, opacity: 0.8}}>Siamo qui per te, sempre</p>
              </div>
            </div>

            <div className="hero-right">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop" alt="CompraSicura Living Room" />
            </div>
          </div>

          <div className="hero-benefits">
            <div className="benefit-card">
              <div className="benefit-card-icon">📦</div>
              <div className="benefit-card-title">Paga alla Consegna</div>
              <div className="benefit-card-text">Sicuro e comodo</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-card-icon">🚚</div>
              <div className="benefit-card-title">Spedizione Veloce</div>
              <div className="benefit-card-text">Consegna in 24-48h</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-card-icon">🔒</div>
              <div className="benefit-card-title">Acquisto Sicuro</div>
              <div className="benefit-card-text">Garanzia soddisfatti</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-card-icon">🎧</div>
              <div className="benefit-card-title">Assistenza Italiana</div>
              <div className="benefit-card-text">Siamo qui per te</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Prodotti in Evidenza</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-price">€{product.price}</div>
                  <div className="product-rating">★★★★★ ({product.rating})</div>
                  <button className="btn-primary" style={{width: '100%', cursor: 'pointer'}} onClick={() => addToCart(product)}>
                    Acquista Ora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-benefits">
            <div className="footer-benefit">
              <div className="footer-benefit-icon">📦</div>
              <div className="footer-benefit-title">Paga alla Consegna</div>
              <div className="footer-benefit-text">Paghi solo quando ricevi il pacco</div>
            </div>
            <div className="footer-benefit">
              <div className="footer-benefit-icon">🚚</div>
              <div className="footer-benefit-title">Spedizione Veloce</div>
              <div className="footer-benefit-text">Consegna in 24-48h</div>
            </div>
            <div className="footer-benefit">
              <div className="footer-benefit-icon">🔄</div>
              <div className="footer-benefit-title">Reso Facile e Gratuito</div>
              <div className="footer-benefit-text">Ha 14 giorni per cambiare idea</div>
            </div>
            <div className="footer-benefit">
              <div className="footer-benefit-icon">🎧</div>
              <div className="footer-benefit-title">Assistenza Italiana</div>
              <div className="footer-benefit-text">Siamo qui per te, sempre</div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Informazioni</h4>
              <ul>
                <li><a href="#">Chi Siamo</a></li>
                <li><a href="#">Contatti</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <ul>
                <li><a href="#">Tutti i Prodotti</a></li>
                <li><a href="#">Offerte</a></li>
                <li><a href="#">Bestseller</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legale</h4>
              <ul>
                <li><a href="#">Politica Privacy</a></li>
                <li><a href="#">Termini e Condizioni</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contatti</h4>
              <ul>
                <li><a href="mailto:comprasicurax@gmail.com">comprasicurax@gmail.com</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 CompraSicura - Tutti i diritti riservati | P.IVA 12345678901</p>
          </div>
        </div>
      </footer>
    </div>
  )
}