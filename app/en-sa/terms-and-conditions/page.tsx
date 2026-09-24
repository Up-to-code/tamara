import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-terms-and-conditions-header.html';
import body from '@/components/exact/en-sa-terms-and-conditions-body.html';
import footer from '@/components/exact/en-sa-terms-and-conditions-footer.html';
import inline from '@/components/exact/en-sa-terms-and-conditions.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
