"use client"
import Sidebar from "../../components/ui/sidebar/Sidebar";

export default function Farm() {
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
            }}></main>
        </div>
    )
}