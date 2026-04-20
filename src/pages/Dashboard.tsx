import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="/" className="hover:scale-101 transition-transform">
          <Card title="Total Users" value="1,245" />
        </a>
        <a href="/" className="hover:scale-101 transition-transform">
          <Card title="Revenue" value="$12,340" />
        </a>
        <a href="/" className="hover:scale-101 transition-transform">
          <Card title="Orders" value="320" />
        </a>
      </div>
    </Layout>
  );
}

export default Dashboard;