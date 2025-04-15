import { getUserDashboardData } from "@/services/api/request/web";

export default async function Page() {
    const data = await getUserDashboardData();
    console.log('===========',data);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Welcome</h2>
                    <p className="text-gray-600">This is your personal dashboard.</p>
                </div>
            </div>
        </div>
    )
}
