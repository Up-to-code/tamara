import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-industry-fashion-header.html';
import body from '@/components/exact/en-sa-industry-fashion-body.html';
import footer from '@/components/exact/en-sa-industry-fashion-footer.html';
import inline from '@/components/exact/en-sa-industry-fashion.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
