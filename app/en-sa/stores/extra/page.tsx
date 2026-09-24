import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-extra-header.html';
import body from '@/components/exact/en-sa-stores-extra-body.html';
import footer from '@/components/exact/en-sa-stores-extra-footer.html';
import inline from '@/components/exact/en-sa-stores-extra.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
