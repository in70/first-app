import React, { CSSProperties, useEffect, useRef } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'


interface AddressListProps {
    addresses: string[];
    names: string[];
}

const AddressList: React.FC<AddressListProps> = ({ addresses, names }) => {
    if (addresses.length !== names.length) {
        console.error("The addresses and names arrays must be of the same length.");
        return null;
    }

    return (
        <div style={styles.scrollableBox}>
            {addresses.map((address, index) => (
                <UserCard address={addresses[index]} name={names[index]} />
            ))}
        </div>
    );
};

interface UserCardProps {
    address: string;
    name: string;
}
  
const UserCard: React.FC<UserCardProps> = ({ address, name }) => {
    const iconRef = useRef(null);

    // useEffect(() => {
    //     const icon = jazzicon(40, parseInt(address.slice(2, 10), 16));
    //     iconRef.current.appendChild(icon);
    // }, [address]);

    return (
        <div style={styles.userCard}>
        {/* <div ref={iconRef} style={styles.icon}></div> */}
        <Jazzicon diameter={100} seed={jsNumberForAddress(address)} />
        <span style={styles.name}>{name}</span>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    scrollableBox: {
        maxHeight: '400px',
        overflowY: 'scroll',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },
    icon: {
        marginRight: '0.5rem',
    },
    name: {
        fontSize: '1rem',
        color: '#333',
    },
};

export default AddressList;
