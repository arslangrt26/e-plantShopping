import React, { useMemo } from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const { id, name, price, quantity, image } = item;

  const itemSubtotal = (price * quantity).toFixed(2);

  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    } else {
      onRemoveItem(id);
    }
  };

  return (
    <div style={styles.cartItem}>
      <img src={image} alt={name} style={styles.image} />

      <div style={styles.details}>
        <h4 style={styles.name}>{name}</h4>
        <p style={styles.price}>${price.toFixed(2)} each</p>
      </div>

      <div style={styles.quantityContainer}>
        <button onClick={handleDecrease} style={styles.qtyButton}>-</button>
        <span style={styles.quantity}>{quantity}</span>
        <button onClick={handleIncrease} style={styles.qtyButton}>+</button>
      </div>

      <div style={styles.subtotal}>
        <p>Total: <strong>${itemSubtotal}</strong></p>
      </div>

      <button onClick={() => onRemoveItem(id)} style={styles.removeButton}>
        Remove
      </button>
    </div>
  );
};

const Cart = ({ items, onUpdateQuantity, onRemoveItem }) => {
  // ✅ Calculate total cart amount
  const totalAmount = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [items]);

  return (
    <div>
      {/* Cart Items */}
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}

      {/* Cart Total */}
      <div style={styles.totalContainer}>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const styles = {
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    borderBottom: '1px solid #ddd',
    gap: '16px',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  details: {
    flex: 2,
  },
  name: {
    margin: '0 0 4px 0',
    fontSize: '16px',
  },
  price: {
    margin: 0,
    color: '#666',
  },
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  qtyButton: {
    padding: '4px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  quantity: {
    fontSize: '16px',
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
  },
  subtotal: {
    flex: 1,
    textAlign: 'right',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  totalContainer: {
    textAlign: 'right',
    padding: '16px',
    borderTop: '2px solid #000',
    marginTop: '10px',
    fontSize: '18px',
  },
};

export default Cart;
