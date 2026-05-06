exports.handler = async event => {
  const { wPlayerName, wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8, wr1, wr2, wn1, wn2, wb1, wb2, wq, wk, bPlayerName, bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8, br1, br2, bn1, bn2, bb1, bb2, bq, bk } = event.queryStringParameters;
  let data = {
    White: {
      PlayerName: `${wPlayerName}`,
      Pieces: [
        {
          type: "p",
          startPos: "a2",
          pos: `${wp1}`
        },
        {
          type: "p",
          startPos: "b2",
          pos: `${wp2}`
        },
        {
          type: "p",
          startPos: "c2",
          pos: `${wp3}`
        },
        {
          type: "p",
          startPos: "d2",
          pos: `${wp4}`
        },
        {
          type: "p",
          startPos: "e2",
          pos: `${wp5}`
        },
        {
          type: "p",
          startPos: "f2",
          pos: `${wp6}`
        },
        {
          type: "p",
          startPos: "g2",
          pos: `${wp7}`
        },
        {
          type: "p",
          startPos: "h2",
          pos: `${wp8}`
        },
        {
          type: "r",
          startPos: "a1",
          pos: `${wr1}`
        },
        {
          type: "r",
          startPos: "h1",
          pos: `${wr2}`
        },
        {
          type: "n",
          startPos: "b1",
          pos: `${wn1}`
        },
        {
          type: "n",
          startPos: "g1",
          pos: `${wn2}`
        },
        {
          type: "b",
          startPos: "c1",
          pos: `${wb1}`
        },
        {
          type: "b",
          startPos: "f1",
          pos: `${wb2}`
        },
        {
          type: "q",
          startPos: "d1",
          pos: `${wq}`
        },
        {
          type: "k",
          startPos: "e1",
          pos: `${wk}`
        }
      ]
    },
    Black: {
      PlayerName: `${bPlayerName}`,
      Pieces: [
        {
          type: "p",
          startPos: "h7",
          pos: `${bp1}`
        },
        {
          type: "p",
          startPos: "g7",
          pos: `${bp2}`
        },
        {
          type: "p",
          startPos: "f7",
          pos: `${bp3}`
        },
        {
          type: "p",
          startPos: "e7",
          pos: `${bp4}`
        },
        {
          type: "p",
          startPos: "d7",
          pos: `${bp5}`
        },
        {
          type: "p",
          startPos: "c7",
          pos: `${bp6}`
        },
        {
          type: "p",
          startPos: "b7",
          pos: `${bp7}`
        },
        {
          type: "p",
          startPos: "a7",
          pos: `${bp8}`
        },
        {
          type: "r",
          startPos: "h8",
          pos: `${br1}`
        },
        {
          type: "r",
          startPos: "a8",
          pos: `${br2}`
        },
        {
          type: "n",
          startPos: "g8",
          pos: `${bn1}`
        },
        {
          type: "n",
          startPos: "b8",
          pos: `${bn2}`
        },
        {
          type: "b",
          startPos: "f8",
          pos: `${bb1}`
        },
        {
          type: "b",
          startPos: "c8",
          pos: `${bb2}`
        },
        {
          type: "q",
          startPos: "d8",
          pos: `${bq}`
        },
        {
          type: "k",
          startPos: "e8",
          pos: `${bk}`
        }
      ]
    }
  };
  const json = JSON.stringify(data);
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: json,
  };
};
