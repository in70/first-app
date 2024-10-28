"use client"
import { useEffect, useState } from "react";
import Sidebar from "../../components/ui/sidebar/Sidebar";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ethers } from "ethers";
import crypto from "crypto";
import axios from "axios";

export default function Leaderboard() {
    const [addresses, setAddresses] = useState<string[]>([]);
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const generatedAddresses: string[] = [];
        for (let i = 0; i < 20; i++) {
        let id = crypto.randomBytes(32).toString("hex");
        let wallet = new ethers.Wallet("0x" + id);
        generatedAddresses.push(wallet.address);
        }
        setAddresses(generatedAddresses);
    }, []);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/", {
                    params: { results: 20 },
                });
                const fetchedNames: string[] = response.data.results.map(
                    (user: any) => `${user.name.first}${user.name.last}`.toLowerCase().concat(".eth").replace(/\s+/g, '')
                );
                setNames(fetchedNames);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchRandomUsers();
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <main
                style={{
                flexGrow: 1,
                overflowY: "auto",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#f7f7f7",
                }}
            >
                <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
                >
                <Card
                    style={{
                    width: "60%",
                    marginLeft: "18%",
                    padding: "1.5rem",
                    marginTop: "8%",
                    marginBottom: "6%",
                    }}
                >
                    <CardHeader>
                        <CardTitle style={{ fontSize: "3rem" }}>Leaderboard</CardTitle>
                        <CardDescription style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                            Top addresses that interacted with the protocol
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            style={{
                            maxHeight: "400px",
                            overflowY: "scroll",
                            padding: "1rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            }}
                        >
                        {addresses.length === names.length &&
                        addresses.map((address, index) => (
                            <div key={address}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                    padding: "0.5rem",
                                }}
                            >
                                <Jazzicon
                                    diameter={40}
                                    seed={jsNumberForAddress(address)}
                                />
                                <span style={{ fontSize: "1.2rem", color: "#333", marginLeft: "2rem" }}>
                                    {names[index]}
                                </span>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
                </div>
            </main>
        </div>
    );
}
