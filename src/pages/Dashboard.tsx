import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value="1,245" />
        <Card title="Revenue" value="$12,340" />
        <Card title="Orders" value="320" />
      </div>
    </Layout>
  );
}

export default Dashboard;