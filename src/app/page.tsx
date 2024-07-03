import PageTitle from "@/common/PageTitle";
import ChartOne from "@/components/home/ChartOne";

export default function Home() {
  const pageHeading = 'Dashboard'
  return (
    <>
      <PageTitle pageHeading={pageHeading}/>
      <div className='grid grid-cols-2 gap-6'>

          <div className=''>
            <div className="bg-white rounded-[4px]">
              <div className="border-b border-[#e9ebec] border-solid px-4 py-5">
                <h4 className="text-[17px] font-medium opacity-85">Motivation and Energy Level Throughout the Day</h4>
              </div>
              <div className="px-4 py-9">
                  <ChartOne/>
              </div>
            </div>
          </div>
          {/* w-1/2 */}

          <div className=''>
            <div className="bg-white rounded-[4px]">
              <div className="border-b border-[#e9ebec] border-solid px-4 py-5">
                <h4 className="text-[17px] font-medium opacity-85">Motivation and Energy Level Throughout the Day</h4>
              </div>
              <div className="px-4 py-9">
                  <ChartOne/>
              </div>
            </div>
          </div>
          {/* w-1/2 */}

          <div className=''>
            <div className="bg-white rounded-[4px]">
              <div className="border-b border-[#e9ebec] border-solid px-4 py-5">
                <h4 className="text-[17px] font-medium opacity-85">Motivation and Energy Level Throughout the Day</h4>
              </div>
              <div className="px-4 py-9">
                  <ChartOne/>
              </div>
            </div>
          </div>
          {/* w-1/2 */}

          <div className=''>
            <div className="bg-white rounded-[4px]">
              <div className="border-b border-[#e9ebec] border-solid px-4 py-5">
                <h4 className="text-[17px] font-medium opacity-85">Motivation and Energy Level Throughout the Day</h4>
              </div>
              <div className="px-4 py-9">
                  <ChartOne/>
              </div>
            </div>
          </div>
          {/* w-1/2 */}

      </div>
    </>
  );
}
