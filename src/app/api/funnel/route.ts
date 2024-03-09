export async function GET() {
  const funnel = [
    {
      value: 100,
      name: "Impressions",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "Clicks",
      fill: "#83a6ed",
    },
    {
      value: 50,
      name: "Visits",
      fill: "#8dd1e1",
    },
    {
      value: 40,
      name: "Inquiries",
      fill: "#82ca9d",
    },
    {
      value: 26,
      name: "Orders",
      fill: "#a4de6c",
    },
  ];

  return Response.json({ funnel });
}
