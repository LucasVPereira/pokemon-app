import React from 'react';

// Função para gerar uma cor aleatória
const getRandomColor = () => {
  const colors = ['#ff6347', '#ffcc00', '#7b68ee', '#32cd32', '#ff4500'];
  return colors[Math.floor(Math.random() * colors.length)];
};

interface AvatarFallbackProps {
  name: string;
  imageUrl?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ name, imageUrl }) => {
  // Gerar iniciais
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

  return (
    <div
      className="w-24 h-24 flex items-center justify-center text-white font-bold rounded-full"
      style={{ backgroundColor: getRandomColor() }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full rounded-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};