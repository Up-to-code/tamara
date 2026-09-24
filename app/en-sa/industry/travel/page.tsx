import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-travel-header.html';
import body from '@/components/exact/en-sa-industry-travel-body.html';
import footer from '@/components/exact/en-sa-industry-travel-footer.html';
import inline from '@/components/exact/en-sa-industry-travel.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
