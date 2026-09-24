import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-pearl-shine-header.html';
import body from '@/components/exact/en-sa-stores-pearl-shine-body.html';
import footer from '@/components/exact/en-sa-stores-pearl-shine-footer.html';
import inline from '@/components/exact/en-sa-stores-pearl-shine.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
