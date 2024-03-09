export async function GET() {
  const salesData = [
    {
      name: "Jan",
      revenue: 4000,
      profit: 2400,
    },
    {
      name: "Feb",
      revenue: 3000,
      profit: 1398,
    },
    {
      name: "Mar",
      revenue: 9800,
      profit: 2000,
    },
    {
      name: "Apr",
      revenue: 3908,
      profit: 2780,
    },
    {
      name: "May",
      revenue: 4800,
      profit: 1890,
    },
    {
      name: "Jun",
      revenue: 3800,
      profit: 2390,
    },
  ];

  return Response.json({ salesData });
}
