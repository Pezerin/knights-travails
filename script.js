function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log(`You're already at the destination: ${end}`);
    return [start];
  }

  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    const moves = get_knight_moves(current);

    for (const move of moves) {
      if (move[0] === end[0] && move[1] === end[1]) {
        console.log(`You made it in ${path.length} moves! Here's your path:`);
        return [...path, move];
      }

      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, [...path, move]]);
      }
    }
  }
}

function get_knight_moves(position) {
  const possible_moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const valid_moves = [];

  for (let i = 0; i < possible_moves.length; i++) {
    let move = possible_moves[i];
    let new_x = position[0] + move[0];
    let new_y = position[1] + move[1];

    if (new_x >= 0 && new_x < 8 && new_y >= 0 && new_y < 8) {
      valid_moves.push([new_x, new_y]);
    }
  }

  return valid_moves;
}

console.log(get_knight_moves([0, 0]));
