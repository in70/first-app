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
  const [gender, setGender] = useState<string[]>([]);
  const [email, setEmail] = useState<string[]>([]);
  const [phone, setPhone] = useState<string[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


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
        // console.log(response.data.results);
        const fetchedNames: string[] = response.data.results.map(
          (user: any) => `${user.name.first}${user.name.last}`.toLowerCase().concat(".eth")
        );
        const fetchedGenders: string[] = response.data.results.map(
          (user: any) => String(user.gender)
        );
        const fetchedEmail: string[] = response.data.results.map(
          (user: any) => String(user.email)
        );
        const fetchedPhone: string[] = response.data.results.map(
          (user: any) => String(user.phone)
        );
        setNames(fetchedNames);
        setGender(fetchedGenders);
        setEmail(fetchedEmail);
        setPhone(fetchedPhone);
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
                        position: "relative",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Jazzicon
                        diameter={40}
                        seed={jsNumberForAddress(address)}
                      />
                      <span
                        style={{
                          fontSize: "1.2rem",
                          color: "#333",
                          marginLeft: "2rem",
                        }}
                      >
                        {names[index]}
                      </span>
                      {hoveredIndex === index && (
                        <div
                          style={{
                            position: "absolute",
                            top: "2rem",
                            left: "0",
                            backgroundColor: "grey",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "4px",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                          }}
                        >
                          {`${gender[index].charAt(0).toUpperCase().concat(gender[index].slice(1))}, Email: ${email[index]}, Phone: ${phone[index].replace(/[()\-\s]/g, '')}`}
                        </div>
                      )}
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
