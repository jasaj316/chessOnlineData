import { resetData } from '../resetData.js';
let data = resetData;
exports.handler = async event => {
  const { wPlayerName, wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8, wr1, wr2, wn1, wn2, wb1, wb2, wq, wk, bPlayerName, bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8, br1, br2, bn1, bn2, bb1, bb2, bq, bk, set } = event.queryStringParameters;
  if (set) {
    data = {
      White: {
        PlayerName: `${wPlayerName}`,
        Pieces: [
          {
            type: "p",
            pos: `${wp1}`
          },
          {
            type: "p",
            pos: `${wp2}`
          },
          {
            type: "p",
            pos: `${wp3}`
          },
          {
            type: "p",
            pos: `${wp4}`
          },
          {
            type: "p",
            pos: `${wp5}`
          },
          {
            type: "p",
            pos: `${wp6}`
          },
          {
            type: "p",
            pos: `${wp7}`
          },
          {
            type: "p",
            pos: `${wp8}`
          },
          {
            type: "r",
            pos: `${wr1}`
          },
          {
            type: "r",
            pos: `${wr2}`
          },
          {
            type: "n",
            pos: `${wn1}`
          },
          {
            type: "n",
            pos: `${wn2}`
          },
          {
            type: "b",
            pos: `${wb1}`
          },
          {
            type: "b",
            pos: `${wb2}`
          },
          {
            type: "q",
            pos: `${wq}`
          },
          {
            type: "k",
            pos: `${wk}`
          }
        ]
      },
      Black: {
        PlayerName: `${bPlayerName}`,
        Pieces: [
          {
            type: "p",
            pos: `${bp1}`
          },
          {
            type: "p",
            pos: `${bp2}`
          },
          {
            type: "p",
            pos: `${bp3}`
          },
          {
            type: "p",
            pos: `${bp4}`
          },
          {
            type: "p",
            pos: `${bp5}`
          },
          {
            type: "p",
            pos: `${bp6}`
          },
          {
            type: "p",
            pos: `${bp7}`
          },
          {
            type: "p",
            pos: `${bp8}`
          },
          {
            type: "r",
            pos: `${br1}`
          },
          {
            type: "r",
            pos: `${br2}`
          },
          {
            type: "n",
            pos: `${bn1}`
          },
          {
            type: "n",
            pos: `${bn2}`
          },
          {
            type: "b",
            pos: `${bb1}`
          },
          {
            type: "b",
            pos: `${bb2}`
          },
          {
            type: "q",
            pos: `${bq}`
          },
          {
            type: "k",
            pos: `${bk}`
          }
        ]
      }
    };
  }
  const json = JSON.stringify(data);
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: json,
  };
};
