import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  PhotoIcon,
  DocumentTextIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Modern E-commerce Website",
      category: "Website Templates",
      price: 49,
      status: "published",
      downloads: 234,
      revenue: 11466,
      image: "/images/templates/ecommerce-1.jpg",
      dateAdded: "2025-01-15"
    },
    {
      id: 2,
      title: "Dashboard UI Kit",
      category: "UI Kits",
      price: 35,
      status: "published",
      downloads: 156,
      revenue: 5460,
      image: "/images/templates/dashboard-1.jpg",
      dateAdded: "2025-01-12"
    }
  ])

  const [newTemplate, setNewTemplate] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
    tags: '',
    image: null as File | null
  })

  const stats = [
    { title: 'Total Revenue', value: '$16,926', icon: <CurrencyDollarIcon className="h-8 w-8" />, change: '+12%' },
    { title: 'Total Downloads', value: '390', icon: <DocumentTextIcon className="h-8 w-8" />, change: '+8%' },
    { title: 'Active Templates', value: '24', icon: <PhotoIcon className="h-8 w-8" />, change: '+3%' },
    { title: 'New Customers', value: '67', icon: <UsersIcon className="h-8 w-8" />, change: '+15%' }
  ]

  const recentOrders = [
    { id: 1, customer: 'John Doe', template: 'Modern E-commerce', amount: '$49', status: 'completed' },
    { id: 2, customer: 'Jane Smith', template: 'Dashboard UI Kit', amount: '$35', status: 'processing' },
    { id: 3, customer: 'Mike Johnson', template: 'SaaS Landing Page', amount: '$39', status: 'completed' }
  ]

  const handleAddTemplate = (e: React.FormEvent) => {
    e.preventDefault()
    const template = {
      id: templates.length + 1,
      title: newTemplate.title,
      category: newTemplate.category,
      price: parseInt(newTemplate.price),
      status: 'draft' as const,
      downloads: 0,
      revenue: 0,
      image: '/images/templates/placeholder.jpg',
      dateAdded: new Date().toISOString().split('T')[0]
    }
    setTemplates([...templates, template])
    setNewTemplate({
      title: '',
      category: '',
      price: '',
      description: '',
      tags: '',
      image: null
    })
  }

  const handleDeleteTemplate = (id: number) => {
    setTemplates(templates.filter(template => template.id !== id))
  }

  const handleStatusChange = (id: number, newStatus: 'published' | 'draft') => {
    setTemplates(templates.map(template => 
      template.id === id ? { ...template, status: newStatus } : template
    ))
  }

  return (
    <Layout title="Admin Dashboard - NexGen AI Studio">
      <div className="min-h-screen bg-gray-100">
        {/* Admin Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">N</span>
                </div>
                <h1 className="text-2xl font-heading font-bold text-gray-900">Admin Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Cog6ToothIcon className="h-6 w-6" />
                </button>
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', name: 'Dashboard', icon: <ChartBarIcon className="h-5 w-5" /> },
                  { id: 'templates', name: 'Templates', icon: <PhotoIcon className="h-5 w-5" /> },
                  { id: 'orders', name: 'Orders', icon: <DocumentTextIcon className="h-5 w-5" /> },
                  { id: 'customers', name: 'Customers', icon: <UsersIcon className="h-5 w-5" /> },
                  { id: 'analytics', name: 'Analytics', icon: <ChartBarIcon className="h-5 w-5" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center">
                          <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
                            {stat.icon}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                            <div className="flex items-center">
                              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                              <span className="ml-2 text-sm text-green-600">{stat.change}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                    </div>
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {recentOrders.map((order) => (
                              <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.template}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    order.status === 'completed' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {order.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'templates' && (
                <div className="space-y-6">
                  {/* Add New Template */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Add New Template</h3>
                    </div>
                    <form onSubmit={handleAddTemplate} className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Template Title</label>
                          <input
                            type="text"
                            value={newTemplate.title}
                            onChange={(e) => setNewTemplate({...newTemplate, title: e.target.value})}
                            className="input-field"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                          <select
                            value={newTemplate.category}
                            onChange={(e) => setNewTemplate({...newTemplate, category: e.target.value})}
                            className="input-field"
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="Website Templates">Website Templates</option>
                            <option value="UI Kits">UI Kits</option>
                            <option value="Mobile Apps">Mobile Apps</option>
                            <option value="Dashboards">Dashboards</option>
                            <option value="Landing Pages">Landing Pages</option>
                            <option value="E-commerce">E-commerce</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                          <input
                            type="number"
                            value={newTemplate.price}
                            onChange={(e) => setNewTemplate({...newTemplate, price: e.target.value})}
                            className="input-field"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                          <input
                            type="text"
                            value={newTemplate.tags}
                            onChange={(e) => setNewTemplate({...newTemplate, tags: e.target.value})}
                            className="input-field"
                            placeholder="React, Next.js, Tailwind"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                          value={newTemplate.description}
                          onChange={(e) => setNewTemplate({...newTemplate, description: e.target.value})}
                          rows={4}
                          className="input-field"
                          required
                        />
                      </div>
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preview Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setNewTemplate({...newTemplate, image: e.target.files?.[0] || null})}
                          className="input-field"
                        />
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="btn-primary">
                          <PlusIcon className="h-5 w-5 mr-2" />
                          Add Template
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Templates List */}
                  <div className="bg-white rounded-lg shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900">Manage Templates</h3>
                    </div>
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {templates.map((template) => (
                              <tr key={template.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <img className="h-10 w-10 rounded-lg object-cover" src={template.image} alt={template.title} />
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{template.title}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{template.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${template.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{template.downloads}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${template.revenue.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <select
                                    value={template.status}
                                    onChange={(e) => handleStatusChange(template.id, e.target.value as 'published' | 'draft')}
                                    className={`text-sm rounded-full px-3 py-1 ${
                                      template.status === 'published' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                                  >
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                  </select>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <div className="flex space-x-2">
                                    <button className="text-primary-600 hover:text-primary-900">
                                      <EyeIcon className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900">
                                      <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteTemplate(template.id)}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      <TrashIcon className="h-5 w-5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Analytics Dashboard</h3>
                  <div className="text-center py-12">
                    <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Analytics dashboard coming soon...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
