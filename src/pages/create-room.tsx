import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface GetRoomsResponse {
  id: string;
  name: string;
}

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');

      const result: GetRoomsResponse[] = await response.json();
      return result;
    },
  });

  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <p>Caregando...</p>}

      <div className="flex flex-col gap-2">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
