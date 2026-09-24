import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-laverne-header.html';
import body from '@/components/exact/en-sa-stores-laverne-body.html';
import footer from '@/components/exact/en-sa-stores-laverne-footer.html';
import inline from '@/components/exact/en-sa-stores-laverne.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
