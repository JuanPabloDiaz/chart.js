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
    {
      name: "Jul",
      revenue: 3490,
      profit: 2100,
    },
    {
      name: "Aug",
      revenue: 4025,
      profit: 2100,
    },
    {
      name: "Sep",
      revenue: 3490,
      profit: 1500,
    },
    {
      name: "Oct",
      revenue: 3490,
      profit: 2100,
    },
    {
      name: "Nov",
      revenue: 2100,
      profit: 3900,
    },
    {
      name: "Dec",
      revenue: 3825,
      profit: 1000,
    },
  ];

  return Response.json({ salesData });
}
