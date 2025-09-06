import Button from "@/components/ui/Buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Notiva Button Components
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beautiful, modern buttons with enhanced hover effects and smooth animations for your e-commerce platform
          </p>
        </div>

        {/* Button Variants */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Button Variants
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <Button variant="default">Default</Button>
              <p className="text-sm text-gray-600">Primary action</p>
            </div>
            <div className="text-center space-y-3">
              <Button variant="secondary">Secondary</Button>
              <p className="text-sm text-gray-600">Secondary action</p>
            </div>
            <div className="text-center space-y-3">
              <Button variant="outline">Outline</Button>
              <p className="text-sm text-gray-600">Subtle action</p>
            </div>
            <div className="text-center space-y-3">
              <Button variant="ghost">Ghost</Button>
              <p className="text-sm text-gray-600">Minimal style</p>
            </div>
            <div className="text-center space-y-3">
              <Button variant="destructive">Destructive</Button>
              <p className="text-sm text-gray-600">Delete actions</p>
            </div>
            <div className="text-center space-y-3">
              <Button variant="link">Link Button</Button>
              <p className="text-sm text-gray-600">Text link style</p>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Button Sizes
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center space-y-3">
              <Button size="sm">Small</Button>
              <p className="text-sm text-gray-600">Compact</p>
            </div>
            <div className="text-center space-y-3">
              <Button size="default">Default</Button>
              <p className="text-sm text-gray-600">Standard</p>
            </div>
            <div className="text-center space-y-3">
              <Button size="lg">Large</Button>
              <p className="text-sm text-gray-600">Prominent</p>
            </div>
            <div className="text-center space-y-3">
              <Button size="xl">Extra Large</Button>
              <p className="text-sm text-gray-600">Hero actions</p>
            </div>
            <div className="text-center space-y-3">
              <Button size="icon">🛒</Button>
              <p className="text-sm text-gray-600">Icon only</p>
            </div>
          </div>
        </section>

        {/* Loading States */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Loading States
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button loading={true}>Loading...</Button>
            <Button variant="primary" loading={true}>Processing</Button>
            <Button variant="secondary" loading={true}>Saving</Button>
          </div>
        </section>

        {/* E-commerce Specific */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-3xl font-semibold mb-8">
            E-commerce Ready
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="secondary" size="lg">Add to Cart</Button>
            <Button variant="primary" size="lg">Buy Now</Button>
            <Button variant="success" size="lg">Checkout</Button>
          </div>
          <p className="text-center mt-6 text-gray-300">
            Perfect for your Notiva stationery store
          </p>
        </section>

        {/* Button States */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Button States
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Disabled States</h3>
              <div className="space-y-3">
                <Button disabled>Disabled Default</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Interactive States</h3>
              <div className="space-y-3">
                <Button>Hover for lift effect</Button>
                <Button variant="secondary">Try clicking me</Button>
                <Button variant="destructive">Danger action</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Card Example */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Real-World Example
          </h2>
          <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📓</div>
                <span className="text-gray-600 font-medium">Aesthetic Notebook</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Premium Planning Journal
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect for journaling, planning, and creative expression. Gen Z approved! ✨
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  LE 299
                </span>
                <span className="text-lg text-gray-500 line-through">
                  LE 399
                </span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                25% OFF
              </div>
            </div>
            <div className="space-y-3">
              <Button variant="secondary" size="lg" className="w-full">Add to Cart</Button>
              <Button variant="primary" size="lg" className="w-full">Buy Now</Button>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="bg-gray-900 rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            How to Use
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Basic Usage</h3>
                <div className="space-y-3">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">With Props</h3>
                <div className="space-y-3">
                  <Button size="lg" className="w-full">Large Full Width</Button>
                  <Button variant="secondary" loading={true}>Loading State</Button>
                  <Button variant="destructive" size="sm">Small Danger</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium mb-3">Code Example:</h4>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400">
                <div>{`<Button variant="primary" size="lg" loading={isLoading}>`}</div>
                <div className="ml-4">{`Buy Now`}</div>
                <div>{`</Button>`}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="text-center bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Enhanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-4xl">✨</div>
              <h3 className="text-xl font-semibold text-gray-900">Smooth Animations</h3>
              <p className="text-gray-600">Hover lift effects and smooth transitions for modern feel</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900">Black & White Theme</h3>
              <p className="text-gray-600">Clean monochrome design that makes your products pop</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900">Loading States</h3>
              <p className="text-gray-600">Built-in loading spinners for async operations</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
