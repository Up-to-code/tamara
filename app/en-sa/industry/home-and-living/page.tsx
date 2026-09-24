import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-home-and-living-header.html';
import body from '@/components/exact/en-sa-industry-home-and-living-body.html';
import footer from '@/components/exact/en-sa-industry-home-and-living-footer.html';
import inline from '@/components/exact/en-sa-industry-home-and-living.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
