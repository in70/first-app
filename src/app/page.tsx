import Sidebar from "../components/ui/sidebar/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main style={{ 
        flexGrow: 1,
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
      }}>
        <div style={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Card style={{ width: '60%', marginLeft: '18%', padding: '1.5rem', marginTop: '8%', marginBottom: '6%' }}>
            <CardHeader>
              <CardTitle style={{ fontSize: '3rem' }}>Defi Dapp</CardTitle>
              <CardDescription style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Staking Module</CardDescription>
            </CardHeader>
            <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="stake" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Stake Amount</label>
                <input
                  type="number"
                  id="stake"
                  name="stake"
                  placeholder="Enter amount to stake"
                  style={{ 
                    width: '100%',
                    padding: '0.5rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div>
                <label htmlFor="bond" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Bond Amount</label>
                <input
                  type="number"
                  id="bond"
                  name="bond"
                  placeholder="Enter amount to bond"
                  style={{ 
                    width: '100%',
                    padding: '0.5rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                <button
                  style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Stake
                </button>
                <button
                  style={{
                    backgroundColor: '#007BFF',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Bond
                </button>
              </div>
            </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
