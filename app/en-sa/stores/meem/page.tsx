import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-meem-header.html';
import body from '@/components/exact/en-sa-stores-meem-body.html';
import footer from '@/components/exact/en-sa-stores-meem-footer.html';
import inline from '@/components/exact/en-sa-stores-meem.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
